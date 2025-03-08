# 微軟注音自訂讀音產生器

一個輔助微軟注音輸入法自訂讀音的工具。

Made by ryan940618 with ❤
- [Facebook](https://facebook.com/ryan940618)
- [Instagram](https://instagram.com/ryan940618)

## 發想

微軟注音輸入法中，有些特殊字或擴充區字元無法被直接打出，但因其自帶之「自訂讀音/字根」工具未妥善維護，導致於現今Windows中其功能根本無法使用。
本工具的開發目的是為了能夠在該工具外完成對自訂讀音的分配，然後再以匯入方式完成對讀音的自定義。

![示範注音欄位無法輸入](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_toolError.gif)
目前的自訂讀音工具內 注音欄位根本無法輸入
且無論做甚麼操作 都有機率會整個視窗卡死

## 前置作業
請先至輸入法設定將擴充區都打開
以確保最大程度的不缺字

在(中/英)處按右鍵>設定
!![開啟設定](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_setting.gif)

進入「進階」 選擇「標準Unicode」 並將所有擴充集打開即可
!![開啟擴充集](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_extended.gif)

## 使用方式

進到工具頁面 - [微軟注音自訂讀音產生器](https://ryan940618.github.io/msbpmf-customization/)
在左側輸入中文字或符號 右側輸入自定義的注音(請使用螢幕上的鍵盤)
![使用示範](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_showcase.gif)

若要一字多音 可以按下該行的「複製」按鈕
或是新增一行 輸入同樣的字也可以

![錯誤行數示範](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_errorEgs.gif)
於完成後按下方「下載」按鈕
若有需要修正之行數會以紅色標示
若無的話 將檔案下載下來

到螢幕右下角的注音/英文切換處(中/英)按右鍵
並進入「自訂讀音/字根」
![進入自訂讀音工具](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_userReading.gif)

### ※注意：下述步驟請務必完全照做，容易出現視窗卡死之情形，當發生時需強制關閉，詳見下方

於左上角選擇「檔案」>「匯入」 選擇剛剛產生的檔案
![選擇檔案](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_importing.gif)
彈出的視窗會說明有效、重複、無效的匯入組合
之後**務必使用滑鼠點擊確定 不要使用鍵盤Enter/ESC**
**然後使用滑鼠點擊「儲存」之圖示 不要使用鍵盤Ctrl+S**
完成後關閉視窗

至此，自定義的符號就可以被直接輸入
(輸入較多次後字元之排序才會靠前)
![in示例](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_in.png)
![fei示例](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_fei.png)

### 發生視窗卡死時

於工作列按下右鍵 開啟「工作管理員」
![開啟工作管理員](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_Taskmgr.gif)

找到IMCCPHR.exe 對其右鍵 > 結束工作
![強制結束](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_endTask.gif)

然後從「※注意」處之步驟重新嘗試操作


# Microsoft Bopomofo Custom Reading Tool
A tool to assist the process of customizing reading in Microsoft Bopomofo.

Made by ryan940618 with ❤
- [Facebook](https://facebook.com/ryan940618)
- [Instagram](https://instagram.com/ryan940618)

**(English instruction graphics will be added later.)**

## Idea

Some of the rare chinese characters or extended characters are not directly typeable with Microsoft Bopomofo, even though it has a built-in "User Reading" tool for user to add customized reading, but the code is not maintained well that it is barely usable.
The aiming of this tool is to let user define their customized readings out of the IME, then finally import the output file into the input method.

![Reading Textbox Not Typeable](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_toolError.gif)
The reading textbox in the User Reading tool is not typeable of any character.
And the tool sometimes just randomly hungs up.

## Pre-requirement
Please go to the settings of IME and enables all extended character sets to minimize the chance of missing characters.

Right-click the "中/英" button and opens "Settings".
!![Opens Settings](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_setting.gif)

Go to "Advanced", choose "Standard Unicode" and enable all extended character sets.
!![Enable Extended Character Sets](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_extended.gif)

## Usage

First, go to the main page of the tool
[微軟注音自訂讀音產生器](https://ryan940618.github.io/msbpmf-customization/)
Type or paste the character to be customized at the left, then use the on-screen keyboard to enter the reading at the right hand side.
![Usage Example](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_showcase.gif)

If managed to assign more than one reading combination on a character, you can use the "copy(複製)" button, which will create a new line with the same character.
You may also manually create a new line and put the same character again.
 
After the assigning, you may press the "download(下載)" button at the bottom.
Lines that doesn't meet the rule will be highlighted as red.
![Lines Error Examples](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_errorEgs.gif)

If every lines are good, the download prompt will pops up, and you may download the generated text file.

Now, check the right bottom corner of your screen, right-click on the Bopomofo/English toggle key (displayed as 中/英), then click "User reading".
![Opens User reading](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_userReading.gif)

### ※Caution: There are high chances that the User Reading Tool will hung during below steps, please perform below steps exactly and carefully, check related part below if the tool hangs.

From the left top of the User reading tool, respectly click "File", "Import...", then select the file that we just downloaded.
After the importing, there will be a window pops up telling you about valid, invalid and duplicated items.
**USE YOUR　MOUSE TO CLICK ON "OK", DO NOT USE ENTER OR ESC**.
**THEN, CLICK THE SAVE BUTTON WITH YOUR MOUSE, DO NOT USE CTRL+S**.
![Importing file](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_importing.gif)

After that, you may close the User reading tool.

Till this point, your customized reading should now working properly!
!["in" example](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_in.png)
!["fei" example](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_fei.png)

### When the User Reading Tool hungs
Right-click on your hotbar and open Task Manager.
![Opens Task Manager](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_Taskmgr.gif)

Find IMCCPHR.exe and right-click on it, click "End Task" to close it forcingly.
![End Task Forcingly](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_endTask.gif)

Then you may try again and continue from the "Caution" step.