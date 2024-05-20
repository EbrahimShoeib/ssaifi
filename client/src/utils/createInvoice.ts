// import jsPDF from "jspdf";

import jsPDF from "jspdf";

type InvoiceData = {
    startDate:string, 
    endDate:string,
    clientName:string,
    horseName:string,
    checkoutDate:string,
    totalPrice:number,
    discount:number,
    debit:number,
    description:string,
    courses:any[]
}
// function createInvoice(
//     {
//         startDate, 
//         endDate,
//         clientName,
//         horseName,
//         checkoutDate
//     }:InvoiceData
//     // discount:string,
//     // lessons:string
// ) {
//     const pdf = new jsPDF()
//     pdf.text('Saifi Stables', 20, 20);
//     pdf.text('123 Main Street', 20, 30);
//     pdf.text('City, State, ZIP', 20, 40);
//     pdf.text('Phone: (123) 456-7890', 20, 50);

//     pdf.line(20, 75, 190, 75)
//     pdf.text('Start Date: ' + startDate, 20 , 60);
//     pdf.text('End Date' + endDate, 20, 70);
    
    
//     pdf.text('Total: $50.00', 20, 110);
//     const img = new Image();
//     img.onload = function() {
//         const imgWidth = 50; // Adjust image width as needed
//         const imgHeight = (img.height * imgWidth) / img.width;
//         pdf.addImage(img, 'PNG', pdf.internal.pageSize.getWidth() - imgWidth - 20, 20, imgWidth, imgHeight);
//         pdf.save('receipt.pdf');
//     };
//     img.src = '/images/logo.png';
// }

// export default createInvoice

export default function createInvoice({
    clientName,
    horseName,
    startDate,
    endDate,
    checkoutDate,
    totalPrice,
    discount,
    debit,
    description,
    courses
}:InvoiceData) {
     const pdfWidth = 100; // 10 cm
    const pdfHeight = 297; // A4 height in mm
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
    });

    const startY = 40;

    // Utility function to center text
    const centerText = (text: string, y: number) => {
        const textWidth = pdf.getTextWidth(text);
        const x = (pdfWidth - textWidth) / 2;
        pdf.text(text, x, y);
    };

    // Stable information
    const stableInfo = `شركة الأكاديمية الدولية للفروسية
P.O Box 926028 - Amman, Jordan - 11190
Phone: (00962) 777 44 2222
E-mail: Info@SaifiStables.com`;

    pdf.setFontSize(10);
    const stableInfoLines = stableInfo.split('\n');
    stableInfoLines.forEach((line, index) => {
        centerText(line, startY + index * 10);
    });

    pdf.setLineWidth(0.5);
    pdf.line(10, startY + stableInfoLines.length * 10 + 10, pdfWidth - 10, startY + stableInfoLines.length * 10 + 10);

    pdf.setFontSize(18);
    centerText('Invoice', startY + stableInfoLines.length * 10 + 30);

    pdf.setLineWidth(0.5);
    pdf.line(10, startY + stableInfoLines.length * 10 + 35, pdfWidth - 10, startY + stableInfoLines.length * 10 + 35);

    pdf.setFontSize(12);
    const infoStartY = startY + stableInfoLines.length * 10 + 50;
    centerText(`Client Name: ${clientName}`, infoStartY);
    centerText(`Horse Name: ${horseName}`, infoStartY + 10);
    centerText(`Start Date: ${startDate}`, infoStartY + 20);
    centerText(`End Date: ${endDate}`, infoStartY + 30);
    centerText(`Checkout Date: ${checkoutDate}`, infoStartY + 40);

    pdf.setLineWidth(0.5);
    pdf.line(10, infoStartY + 45, pdfWidth - 10, infoStartY + 45);

    centerText(`Total Price: $${totalPrice}`, infoStartY + 60);
    centerText(`Discount: $${discount}`, infoStartY + 70);
    centerText(`Debit: $${debit}`, infoStartY + 80);
    centerText(`Description: ${description}`, infoStartY + 90);

    const subtotal = totalPrice - discount + debit;
    const tax = subtotal * 0.16;
    const finalTotal = subtotal + tax;

    centerText(`Subtotal: $${subtotal.toFixed(2)}`, infoStartY + 100);
    centerText(`Tax (16%): $${tax.toFixed(2)}`, infoStartY + 110);
    centerText(`Final Total: $${finalTotal.toFixed(2)}`, infoStartY + 120);

    pdf.setLineWidth(0.5);
    pdf.line(10, infoStartY + 125, pdfWidth - 10, infoStartY + 125);

    centerText('Lessons:', infoStartY + 140);
    // lessons.forEach((lesson, index) => {
    //     centerText(`- ${lesson}`, infoStartY + 150 + index * 10);
    // });


    pdf.save('invoice.pdf');

}