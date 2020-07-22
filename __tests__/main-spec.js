const printReceiptInfo = require('../main');

var barcodes=[
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000000',
    'ITEM000001',
    'ITEM000001',
    'ITEM000004'
  ];

it ('should input a barcodes array', () => {
    expect(printReceiptInfo(barcodes)).toBe("***<store earning no money>Receipt ***\n" + 
        "Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)\n" + 
        "Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)\n" + 
        "Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)\n" + 
        "----------------------\n" + 
        "Total: 23 (yuan)\n" + 
        "**********************");
});