# 完成任务如下：
### POS system tasking:
1. 生成唯一型商品条形码数组uniqueBarcodes
    - 输入：barcodes:[string]
    - 输出：uniqueBarcodes:[string]
2. 计算唯一商品条形码对应的数量itemQuantity
    - 输入：uniqueBarcodes:[string]
    - 输出：itemQuantity:{barcodes:string,quantity:int}
3. 获取每一个商品的名称 . 单价信息
    - 输入：itemQuantity:{barcodes:string,quantity:int}
    - 输出：itemInfo:{barcoude:string,name:string,quantity:int,unit price:int}
4. 计算每一个商品的总价
    - 输入：itemInfo:{barcoude:string,name:string,quantity:int,unit price:int}
    - 输出：itemSubtotal:{barcoude:string,name:string,quantity:int,unit price:int,subtotal:int}
5. 合计商品价格进行总价Total的计算
    - 输入：itemSubtotal:{barcoude:string,name:string,quantity:int,unit price:int,subtotal:int}
    - 输出：total:int
6. 格式化商品信息与总价生成receipt
    - 输入：itemSubtotal:{barcoude:string,name:string,quantity:int,unit price:int,subtotal:int}、total:int
    - 输出：receipt:string
### 上下文图如下:
![加载失败](https://github.com/wyuefzhuol/POS-system/blob/master/POSsystem.png)
### PDCA分析如下:
| Method | Plan | Do | Check | Action |
| ---- | ---- | ---- | ---- | ---- |
| getUniqueBarcodes | 5min | 10min | 因为js中数组提取唯一值不熟练 | 在网上搜集了相关资料，进行了代码重构，提高了编写代码的效率 |
| getItemQuantity | 5min | 7min | 因为对于对象新添加索引不熟练 | 在网上搜集了相关知识，进行尝试编码后能够熟练应用 |
| getItemInfo | 10min | 5min | 在前一个函数上以及进行了相关知识的获取，对于该函数能够迅速进行 | / |
| calculateSubtotal | 5min | 5min | / | / |
| calculateTotal | 5min | 3min | 通过前一函数的结果，能够有效迅速地计算新的结果 | / |
| formatReceipt | 5min | 5min | 已有结果进行验证，能够迅速明确该代码设计的输出 | 应当尝试从一个新的需求进行明确输出的训练 |
