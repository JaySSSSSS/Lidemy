function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])

＃執行流程＃
1. 執行第一行，設定函數名稱為 isValid ，參數 arr 為一個陣列。
2. 執行第二行，設定變數 i 是 0，檢查 0 是否小於陣列長度，是，繼續執行，開始進入第一圈迴圈
3. 執行第三行，判斷 arr[0] 是否小於等於零，不是，回到第二行
4. 執行第二行，設定變數 i 是 1，檢查 1 是否小於陣列長度，是，繼續執行，開始進入第二圈迴圈
5. 執行第三行，判斷 arr[1] 是否小於等於零，不是，回到第二行
6. 執行第二行，設定變數 i 是 2，檢查 2 是否小於陣列長度，是，繼續執行，開始進入第三圈迴圈
7. 執行第三行，判斷 arr[2] 是否小於等於零，不是，回到第二行
8. 執行第二行，設定變數 i 是 3，檢查 3 是否小於陣列長度，是，繼續執行，開始進入第四圈迴圈
9. 執行第三行，判斷 arr[3] 是否小於等於零，不是，回到第二行
10. 執行第二行，設定變數 i 是 4，檢查 4 是否小於陣列長度，是，繼續執行，開始進入第五圈迴圈
11. 執行第三行，判斷 arr[4] 是否小於等於零，不是，回到第二行
12. 執行第二行，設定變數 i 是 5，檢查 5 是否小於陣列長度，是，繼續執行，開始進入第六圈迴圈
13. 執行第三行，判斷 arr[5] 是否小於等於零，不是，回到第二行
14. 執行第二行，設定變數 i 是 6，檢查 6 是否小於陣列長度，否，執行完畢
15. 執行第五行，設定變數 i 是 2，檢查 2 是否小於陣列長度，是，繼續執行，開始進入第一圈迴圈
16. 執行第六行，判斷 arr[2] 是否等於 arr[0] 加上 arr[1]，是，回到第五行
17. 執行第五行，設定變數 i 是 3，檢查 3 是否小於陣列長度，是，繼續執行，開始進入第二圈迴圈
18. 執行第六行，判斷 arr[3] 是否等於 arr[1] 加上 arr[2]，是，回到第五行
19. 執行第五行，設定變數 i 是 4，檢查 4 是否小於陣列長度，是，繼續執行，開始進入第三圈迴圈
20. 執行第六行，判斷 arr[4] 是否等於 arr[2] 加上 arr[3]，是，回到第五行
21. 執行第五行，設定變數 i 是 5，檢查 5 是否小於陣列長度，是，繼續執行，開始進入第四圈迴圈
22. 執行第六行，判斷 arr[5] 是否等於 arr[3] 加上 arr[4]，是，回到第五行
23. 執行第五行，設定變數 i 是 6，檢查 6 是否小於陣列長度，否，執行完畢
24. 執行第七行，輸出 valid

這個函數用來檢查陣列裡的數字是否大於零以及每個元素是否等於前兩個元素的總和，類似判斷費氏數列．