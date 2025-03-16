# 微軟注音自訂讀音產生器  
一個輔助微軟注音輸入法自訂讀音的工具。  

Made by ryan940618 with ❤  
- [Facebook](https://facebook.com/ryan940618)  
- [Instagram](https://instagram.com/ryan940618)

## 發想  
微軟注音輸入法中，有些**特殊字**或**擴充區字元**無法被直接打出，但因輸入法自帶之**「自訂讀音/字根」** 工具未妥善維護，導致其功能於現今Windows中幾乎無法使用。  
本工具的開發目的是為了能夠在該工具外完成對自訂讀音的分配，然後再**以匯入方式**完成對讀音的自定義。  

![示範注音欄位無法輸入](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_toolError.gif)  
目前的自訂讀音工具內，**注音欄位無法輸入**。  
且無論做甚麼操作，都有機率會導致整個**視窗卡死**(無法被focus)。  

## 前置作業  
請先至輸入法設定**啟用所有擴充區**，以確保在最大程度上避免自訂讀音後仍打不出來的情形。  

### 操作方式：
於中/英切換處右鍵、設定。  
![開啟設定](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_setting.gif)  

進入**「進階」**，選擇**「標準Unicode」**並將所有擴充集啟用即可。  
![開啟擴充集](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_extended.gif)  

## 使用方式  
先進到工具主頁面 - [微軟注音自訂讀音產生器](https://ryan940618.github.io/msbpmf-customization/)  
左側用於輸入/貼上中文字元或符號，右側用於輸入自定義的注音，注音請使用螢幕上的鍵盤。  
![使用示範](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/showcase.gif)  

若要一字多音，可以按下該行的**「複製」**按鈕，或是手動新增一行，再輸入同樣的字元也可以。  

![錯誤行數示範](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/errorEgs.gif)  
於完成後按下方**「下載」**按鈕，若有需要修正之行數會被以紅色標記，若無的話，檔案會彈出下載。  

完成下載後，到工具列的輸入法中/英切換處按右鍵，並進入**「自訂讀音/字根」**功能。  
![進入自訂讀音工具](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_userReading.gif)  

### ※注意：下述步驟請務必完全照做，容易出現視窗卡死之情形，當發生時需強制關閉，詳見下方[發生視窗卡死時](https://github.com/ryan940618/msbpmf-customization#%E7%99%BC%E7%94%9F%E8%A6%96%E7%AA%97%E5%8D%A1%E6%AD%BB%E6%99%82)  
於左上角選擇**「檔案(F)」**，**「匯入(I)」**，並選擇剛剛下載的檔案。  
![選擇檔案](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_importing.gif)  
彈出的視窗會說明有效、重複、無效的匯入組合，至此**請不要使用鍵盤**。  
**使用滑鼠點擊**確定，然後**務必用滑鼠點一下黃底表格處**，然後再**使用滑鼠點擊「儲存」**之圖示，儲存完畢即可關閉該工具。  

儲存之後，自定義的符號理應就可以被直接輸入!  
(註：**輸入較多次後**字元之排序才會靠前。)  
![in示例](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/in.png)  
![fei示例](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/fei.png)  

### 發生視窗卡死時  
於工作列按下右鍵，開啟**「工作管理員」**。  
![開啟工作管理員](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_Taskmgr.gif)  

找到**「IMCCPHR.exe」**，對其按下右鍵、**「結束工作」**。  
![強制結束](https://github.com/ryan940618/msbpmf-customization/blob/4baab058b90d75f1ecce8f16e1b58765bf2cc519/assets/zh_endTask.gif)  

然後從**「※注意」**處之步驟重新嘗試操作。  


# Microsoft Bopomofo Custom Reading Tool  
A tool to assist the process of customizing reading in Microsoft Bopomofo.  

Made by ryan940618 with ❤  
- [Facebook](https://facebook.com/ryan940618)  
- [Instagram](https://instagram.com/ryan940618)  

## Idea  
Some of the rare chinese characters or extended characters are not directly typeable with Microsoft Bopomofo, even though it has a built-in "User Reading" tool for user to add customized reading, but the code is not maintained well that it is barely usable.  
The aiming of this tool is to let user define their customized readings out of the IME, then finally import the output file into the input method.  

![Reading Textbox Not Typeable](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/en_toolError.gif)  
The reading textbox in the User Reading tool is not typeable of any character.  
And the tool sometimes just randomly hungs up.  

## Pre-requirement  
Please go to the settings of IME and enables all extended character sets to minimize the chance of missing characters.  

Right-click the "中/英" button and opens **"Settings"**.  
![Opens Settings](https://github.com/ryan940618/msbpmf-customization/blob/63fb3c9041cc5a5d2c7373bad6a64603511fb7a4/assets/en_settings.gif)  

Go to **"Advanced"**, choose **"Standard Unicode"** and enable all extended character sets.  
![Enable Extended Character Sets](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/en_extended.gif)  

## Usage  
First, go to the main page of the tool.  
[微軟注音自訂讀音產生器](https://ryan940618.github.io/msbpmf-customization/)  
Type or paste the character to be customized at the left, then use the on-screen keyboard to enter the reading at the right hand side.  
![Usage Example](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/showcase.gif)  

If managed to assign more than one reading combination on a character, you can use the **"copy(複製)"** button, which will create a new line with the same character.  
You may also manually create a new line and put the same character again.  
 
After the assigning, you may press the **"download(下載)"** button at the bottom.  
Lines that doesn't meet the rule will be highlighted as red.  
![Lines Error Examples](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/errorEgs.gif)  

If every lines are good, the download prompt will pops up, and you may download the generated text file.  

Now, check the right bottom corner of your screen, right-click on the Bopomofo/English toggle key (displayed as 中/英), then click "User reading".  
![Opens User reading](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/en_userReading.gif)  

### ※Caution: There are high chances that the User Reading Tool will hung during below steps, please perform below steps exactly and carefully, check [related part below](https://github.com/ryan940618/msbpmf-customization#when-the-user-reading-tool-hungs) if the tool hungs.  
From the left top of the User reading tool, respectively click **"File"**, **"Import..."**, then select the file that we just downloaded.  
After the importing, there will be a window pops up telling you about valid, invalid and duplicated imported items.  
Till this point, **DO NOT USE YOUR KEYBOARD!**  
**USE YOUR MOUSE** to click on **"OK"**.  
**THEN CLICK THE YELLOW COLORED BACKGROUND TABLE FIRST**  
Finally, click the save button **WITH YOUR MOUSE!**  
![Importing file](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/en_importing.gif)  

After that, you may close the User reading tool.  

Till this point, your customized reading should now working properly!  
!["in" example](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/in.png)  
!["fei" example](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/fei.png)  

### When the User Reading Tool hungs  
Right-click on your hotbar and open **Task Manager**.  
![Opens Task Manager](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/en_Taskmgr.gif)  

Find IMCCPHR.exe and right-click on it, click **"End Task"** to close it forcingly.  
![End Task Forcingly](https://github.com/ryan940618/msbpmf-customization/blob/9cf830d9bf40feb3bec76a1af16118dbc7207668/assets/en_endTask.gif)  

Then you may try again and continue from the **"Caution"** step.  