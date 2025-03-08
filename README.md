# 微軟注音自訂讀音產生器

一個輔助微軟注音輸入法自訂讀音的工具。

Made by ryan940618 with ❤
- [Facebook](https://facebook.com/ryan940618)
- [Instagram](https://instagram.com/ryan940618)

## 發想

微軟注音輸入法中，有些特殊字或擴充區字元無法被直接打出，但因其自帶之「使用者自訂讀音」工具未妥善維護，導致於現今Windows中其功能根本無法使用。
本工具的開發目的是為了能夠在該工具外完成對自訂讀音的分配，然後再以匯入方式完成對讀音的自定義。

(圖片待補)
目前的讀音自訂工具內 注音欄位根本無法輸入
且無論做甚麼操作 都有機率會整個視窗卡死

## 使用方式

進到工具頁面 - [微軟注音自訂讀音產生器](https://ryan940618.github.io/msbpmf-customization/)
在左側輸入中文字或符號 右側輸入自定義的注音(請使用螢幕上的鍵盤)

若要一字多音 可以按下該行的「複製」按鈕
或是新增一行 輸入同樣的字也可以

於完成後按下方下載按鈕
若有需要修正之行數會以紅色標示
若無的話 將檔案下載下來

到螢幕右下角的注音/英文切換處(中/A)按右鍵
並進入「使用者自訂讀音工具」

### ※注意：下述步驟容易出現視窗卡死之情形，當發生時需強制關閉，詳見下方

於左上角選擇「檔案」>「匯入」
選擇剛剛產生的檔案之後 建議使用鍵盤Ctrl + S
然後將視窗關閉即可

### 發生視窗卡死時
於工作列按下右鍵 開啟「工作管理員」
找到IMCCPHR.exe 對其右鍵>結束工作
然後從步驟~再次開始


# Microsoft Bopomofo Custom Reading Tool

A tool to assist the process of customizing reading in Microsoft Bopomofo.

Made by ryan940618 with ❤
- [Facebook](https://facebook.com/ryan940618)
- [Instagram](https://instagram.com/ryan940618)

## Idea

Some of the rare chinese characters or extended characters are not directly typeable with Microsoft Bopomofo, even though it has a built-in "User Reading" tool for user to add customized reading, but the code is not maintained well that it is barely usable.
The aiming of this tool is to let user define their customized readings out of the IME, then finally import the output file into the input method.

(Image TBD)
The reading textbox in the User Reading tool is not typeable of any character.
And the tool sometimes just randomly hungs up.

## Usage

First, go to the main page of the tool
[微軟注音自訂讀音產生器](https://ryan940618.github.io/msbpmf-customization/)
Type or paste the character to be customized at the left, then use the on-screen keyboard to enter the reading at the right hand side.

If managed to assign more than one reading combination on a character, you can use the "copy(複製)" button, which will create a new line with the same character.
You may also manually create a new line and put the same character again.
 
After the assigning, you may press the "download(下載)" button at the bottom.
Lines that doesn't meet the rule will be highlighted as red.
If every lines are good, the download prompt will pops up, and you may download the generated text file.

Now, check the right bottom corner of your screen, right-click on the Bopomofo/English toggle key (displayed as 中/A), then click "User Reading".

### ※Caution: There are high chances that the User Reading Tool will hung during below steps, check related part if happened.

From the left top, respectly click File>Import
After the importing, it is suggested to save with Ctrl&S hotkey.
(You may also use the mouse to click save in the GUI, but it may hang.)
After saved, you can now close it.

### When the User Reading Tool hungs
Right-click on the hotbar and open Task Manager, find IMCCPHR.exe and do a right-click on it, finally click End Task to force close it.
Then you may continue from step ~
