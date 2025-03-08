import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const standard = [
  "ㄅ", "ㄆ", "ㄇ", "ㄈ",
  "ㄉ", "ㄊ", "ㄋ", "ㄌ",
  "ˇ", "ㄍ", "ㄎ", "ㄏ",
  "ˋ", "ㄐ", "ㄑ", "ㄒ",
  "ㄓ", "ㄔ", "ㄕ", "ㄖ",
  "ˊ", "ㄗ", "ㄘ", "ㄙ",
  "˙", "ㄧ", "ㄨ", "ㄩ",
  "ㄚ", "ㄛ", "ㄜ", "ㄝ",
  "ㄞ", "ㄟ", "ㄠ", "ㄡ",
  "ㄢ", "ㄣ", "ㄤ", "ㄥ",
  "ㄦ", "0", "1", "2",
  "3", "4", "5", "6"
];

const etan = [
  "˙", "ㄟ", "ㄚ", "ㄠ",
  "ˊ", "ㄝ", "ㄙ", "ㄨ",
  "ˇ", "ㄧ", "ㄉ", "ㄒ",
  "ˋ", "ㄜ", "ㄈ", "ㄍ",
  "", "ㄊ", "ㄐ", "ㄅ",
  "", "ㄡ", "ㄏ", "ㄋ",
  "ㄑ", "ㄩ", "ㄖ", "ㄇ",
  "ㄢ", "ㄞ", "ㄎ", "ㄓ",
  "ㄣ", "ㄛ", "ㄌ", "ㄔ",
  "ㄤ", "ㄆ", "ㄗ", "ㄕ",
  "ㄥ", "5", "ㄘ", "0",
  "ㄦ", "1", "2", "3"
];

export default function ZhuyinCustomization() {
  const regexA = /^[\u3105-\u3119]$/; // 聲母
  const regexB = /^[\u3127\u3128\u3129]$/; // 介音（ㄧㄨㄩ）
  const regexC = /^[\u311A-\u3126]$/; // 韻母（ㄚㄛㄜ…）
  const regexD = /^[\u02CA\u02C7\u02CB\u02D9\u02C9]$/; // 聲調（ˊˇˋ˙）

  const [lines, setLines] = useState([{ id: Date.now(), char: "", zhuyin: "", error: false, ermsg: "" }]);
  const [selectedLine, setSelectedLine] = useState<number | null>(null);
  const [keyboardType, setKeyboardType] = useState<"standard" | "etan">("standard");
  const initialZhuyin = "　　　 ";
  const handleChange = (id: number, value: string) => {
    const unicodeChars = Array.from(value)
    if (unicodeChars.length > 1) return;

    setLines((prev) =>
      prev.map((line) => (line.id === id ? { ...line, char: value, error: false } : line))
    );
  };

  const isValidZhuyin = (char: string) => {
    return /^[\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]$/.test(char);
  };

  const backspace = () => {
    if (selectedLine !== null) {
      setLines((prev) =>
        prev.map((line) => {
          if (line.id !== selectedLine) return line;

          let newZhuyin = line.zhuyin || initialZhuyin;
          const zhuyinArray = newZhuyin.split("");

          // 找到最後一個非空格的字符，然後刪除
          for (let i = zhuyinArray.length - 1; i >= 0; i--) {
            if (zhuyinArray[i] !== "　" && zhuyinArray[i] !== " ") { // 非全形空格或半形空格
              zhuyinArray[i] = i === 3 ? " " : "　"; // 聲調位（最後一位）替換半形空格，其餘全形空格
              break;
            }
          }

          return { ...line, zhuyin: zhuyinArray.join("") };
        })
      );
    }
  };

  const insertZhuyin = (char: string) => {
    if (selectedLine !== null) {
      setLines((prev) =>
        prev.map((line) => {
          if (line.id !== selectedLine) return line;
          let newZhuyin = line.zhuyin || initialZhuyin;
          if ((char) === 'B') {
            for (let index = -1; index < newZhuyin.length; index--) {
              const element = newZhuyin[index];
              if (element === '\u0020' || element === '\u3000') {
                continue
              }
              if (index == -1) {
                newZhuyin = newZhuyin.slice(0, index) + '\u0020'
              }
              newZhuyin = newZhuyin.slice(0, index) + '\u3000'
            }
          } else {
            if (regexA.test(char)) newZhuyin = char + newZhuyin.slice(1);
            else if (regexB.test(char)) newZhuyin = newZhuyin[0] + char + newZhuyin.slice(2);
            else if (regexC.test(char)) newZhuyin = newZhuyin.slice(0, 2) + char + newZhuyin.slice(3);
            else if (regexD.test(char)) newZhuyin = newZhuyin.slice(0, 3) + char;
          }
          return { ...line, zhuyin: newZhuyin };
        })
      );
    }
  };

  const validateInput = async () => {
    return new Promise((resolve) => {
      let valid = true;
      setLines((prev) => {
        const newLines = prev.map((line) => {
          let msg = "";
          let zhuyinValid = true;
          const zhuyinParts = line.zhuyin.split("");

          if (line.char.length !== 0) {
            if (regexA.test(zhuyinParts[0] || "") ||
              regexB.test(zhuyinParts[1] || "") ||
              regexC.test(zhuyinParts[2] || "")) {
              if (!regexD.test(zhuyinParts[3] || "")) {
                zhuyinValid = false;
                msg = "未指定音調!";
              }
            } else {
              zhuyinValid = false;
              msg = "未輸入注音!";
            }
            if (zhuyinValid) {
              msg = "";
            }
          } else {
            zhuyinValid = false;
            msg = "未輸入符號/字元!";
          }
          /*
          console.log("----Line " + line.id + "----")
          console.log("Length: " + zhuyinParts.length);
          console.log("Test A: " + regexA.test(zhuyinParts[0] || ""));
          console.log("Test B: " + regexB.test(zhuyinParts[1] || ""));
          console.log("Test C: " + regexC.test(zhuyinParts[2] || ""));
          console.log("Test D: " + regexD.test(zhuyinParts[3] || ""));
          console.log("zhuyinValid: " + zhuyinValid);
          console.log("\n")
          */
          if (!zhuyinValid) {
            valid = false;
          }
          return { ...line, error: !zhuyinValid, ermsg: msg };
        });
        resolve(valid);
        return newLines;
      });
    });
  };

  function encodeUTF16LE(str: string): Uint8Array {
    const buffer = new ArrayBuffer(str.length * 2);
    const view = new Uint16Array(buffer);

    for (let i = 0; i < str.length; i++) {
      view[i] = str.charCodeAt(i);
    }

    return new Uint8Array(buffer);
  }

  const download = async () => {
    const isValid = await validateInput();
    if (!isValid) return;

    const HALF_SPACE = "\u0020";
    const fileContent = lines
      .map(line => `${line.char}${HALF_SPACE}${HALF_SPACE}${line.zhuyin}${HALF_SPACE}`)
      .join("\n");

    const utf16leContent = encodeUTF16LE(fileContent);

    // Add UTF-16 LE BOM (Byte Order Mark: 0xFF 0xFE)
    const bom = new Uint8Array([0xFF, 0xFE]);

    // Merge BOM with the encoded content
    const combinedArray = new Uint8Array(bom.length + utf16leContent.length);
    combinedArray.set(bom, 0);
    combinedArray.set(utf16leContent, bom.length);

    const blob = new Blob([combinedArray], { type: "text/plain;charset=UTF-16LE" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ZhuyinCustom_" + Date.now() + ".txt";
    link.click();
  };

  const duplicate = (id: number) => {
    setLines((prev) => {
      const newLine = { id: Date.now(), char: prev.find((line) => line.id === id)!.char, zhuyin: "", error: false, ermsg: "" };
      return [...prev, newLine];
    });
  };

  const newLine = () => {
    setLines((prev) => [
      ...prev,
      { id: Date.now(), char: "", zhuyin: "", error: false, ermsg: "" }
    ]);
  };

  const removeLine = (id: number) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  return (
    <div className="typing p-6 max-w-137 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold text-center mb-5">微軟注音自訂讀音產生器</h1>

      {/* 輸入區 */}
      <div className="border rounded-lg p-3 bg-gray-100 ">
        {lines.map((line, index) => (
          <div
            key={line.id}
            className={`flex items-center space-x-2 p-2 rounded-md transition ${line.error ? "bg-red-100 border border-red-400" : "bg-white"
              }`}
          >
            <span className="w-8 text-right font-mono text-gray-500">{index + 1}</span>
            <Input
              className="w-12 h-10 text-lg text-center border border-gray-300 rounded-md"
              maxLength={2}
              value={line.char}
              onChange={(e) => handleChange(line.id, e.target.value)}
            />
            <Input
              className="w-22 h-10 text-lg text-center border border-gray-300 rounded-md"
              maxLength={4}
              value={line.zhuyin}
              onFocus={() => setSelectedLine(line.id)}
              readOnly
            />
            <Button onClick={() => duplicate(line.id)}>複製</Button>
            <Button variant="destructive" onClick={() => removeLine(line.id)}>刪除</Button>
            {line.ermsg && <p className="text-red-700 text-sm font-bold bg-red-100 rounded-md p-1 mt-1">{line.ermsg}</p>}
          </div>
        ))}
        <Button onClick={newLine} className="mt-2 w-full">新增</Button>
      </div>

      {/* 注音鍵盤 */}
      <div className="keyboard_out mt-4 bg-gray-100 p-5 rounded-lg">
        <div className="keyboard">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-medium">螢幕鍵盤</h2>
            <div>
              <Button
                className={`px-4 py-1 rounded-md mx-1 ${keyboardType === "standard" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setKeyboardType("standard")}
              >
                標準注音
              </Button>
              <Button
                className={`px-4 py-1 rounded-md mx-1 ${keyboardType === "etan" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                onClick={() => setKeyboardType("etan")}
              >
                倚天注音
              </Button>
            </div>
          </div>

          <div className="keys flex flex-wrap gap-2">
            {Array.from({ length: Math.ceil((keyboardType === "standard" ? standard : etan).length / 4) }).map((_, unitIndex) => (
              <div key={unitIndex} className="flex flex-col">
                {(keyboardType === "standard" ? standard : etan)
                  .slice(unitIndex * 4, unitIndex * 4 + 4)
                  .map((char) => (
                    <Button
                      key={char}
                      className={`p-2 bg-white border rounded-lg shadow hover:bg-gray-200 text-black`}
                      onClick={() => insertZhuyin(char)}
                      style={{
                        //marginLeft: `${index * 0.5}rem`, // Shift each button in the column
                      }}
                      disabled={!isValidZhuyin(char)}
                    >
                      {isValidZhuyin(char) ? char : "　"}
                    </Button>
                  ))}
              </div>
            ))}
            <Button
              key="ˉ"
              className={`p-2 w-122 bg-white border rounded-lg shadow hover:bg-gray-200 text-black`}
              onClick={() => insertZhuyin("ˉ")}
              style={{
                //marginLeft: `${index * 0.5}rem`, // Shift each button in the column
              }}
            >
              空格(一聲)
            </Button>
            <Button
              key="B"
              className={`p-2 w-122 bg-white border rounded-lg shadow hover:bg-gray-200 text-black`}
              onClick={backspace}
              style={{
                //marginLeft: `${index * 0.5}rem`, // Shift each button in the column
              }}
            >
              ⌫ Backspace
            </Button>
          </div>
        </div>
      </div>
      <Button className="mt-4 w-full" onClick={download}>產生</Button>
    </div>
  );
}
