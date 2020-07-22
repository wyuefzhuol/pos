function printReceiptInfo(barcodes) {

    var uniqueBarcodes = getUniqueBarcodes(barcodes);

    var itemQuantity = getItemQuantity(barcodes, uniqueBarcodes);

    var itemInfo = getItemInfo(itemQuantity);

    var itemSubtotal = calculateSubtotal(itemInfo);

    var total = calculateTotal(itemSubtotal);

    return formatReceipt(itemSubtotal, total);
}

var item = [
    {
       barcode: 'ITEM000000',
       name: 'Coca-Cola',
       price: 3
     },
     {
       barcode: 'ITEM000001',
       name: 'Sprite',
       price: 3
     },
     {
       barcode: 'ITEM000002',
       name: 'Apple',
       price: 5
     },
     {
       barcode: 'ITEM000003',
       name: 'Litchi',
       price: 15
     },
     {
       barcode: 'ITEM000004',
       name: 'Battery',
       price: 2
     },
     {
       barcode: 'ITEM000005',
       name: 'Instant Noodles',
       price: 4
     }
 ];

function getUniqueBarcodes(barcodes) {
    var uniqueBarcodes = new Array()
    for (var i = 0; i < barcodes.length; i++) {
        for (var j = i + 1; j < barcodes.length; j++) {
            if (barcodes[i] === barcodes[j]) {
                j = ++i;
            }
        }
        uniqueBarcodes.push(barcodes[i]);
    }
    return uniqueBarcodes;
}

function getItemQuantity(barcodes, uniqueBarcodes) {
    var itemQuantity = new Array();
    for (var i = 0; i < uniqueBarcodes.length; i++) {
        var quantity = 0;
        var itemDetail = {barcode:'',quantity:''};
        for (var j = 0; j < barcodes.length; j++) {
            if (uniqueBarcodes[i] === barcodes[j]) {
                quantity++;
            }
        }
        itemDetail.barcode = uniqueBarcodes[i];
        itemDetail.quantity = quantity;
        itemQuantity.push(itemDetail);
    }
    return itemQuantity;
}

function getItemInfo(itemQuantity) {
    for (var i = 0; i < itemQuantity.length; i++) {
        for (var j = 0; j < item.length; j++) {
            if (itemQuantity[i].barcode == item[j].barcode) {
                itemQuantity[i].name = item[j].name;
                itemQuantity[i].price = item[j].price;
            }
        }
    }
    return itemQuantity;
}

function calculateSubtotal(itemInfo) {
    for (var i = 0; i < itemInfo.length; i++) {
        itemInfo[i].subtotal = itemInfo[i].quantity * itemInfo[i].price;
    }
    return itemInfo;
}

function calculateTotal(itemSubtotal) {
    var total = 0;
    for (var i = 0; i < itemSubtotal.length; i++) {
        total += itemSubtotal[i].subtotal;
    }
    return total;
}

function formatReceipt(itemSubtotal, total) {
    var head = "***<store earning no money>Receipt ***\n";
    var footer = "**********************";
    var itemTemplate = head;
    for (var i = 0; i < itemSubtotal.length; i++) {
        var detail = "Name: "+itemSubtotal[i].name+", Quantity: "+itemSubtotal[i].quantity+", Unit price: "+itemSubtotal[i].price+" (yuan), Subtotal: "+itemSubtotal[i].subtotal+" (yuan)\n"
        itemTemplate += detail;
    }
    itemTemplate += "----------------------\n";
    itemTemplate += "Total: "+total+" (yuan)\n";
    itemTemplate += footer;
    return itemTemplate;
}

module.exports = printReceiptInfo;