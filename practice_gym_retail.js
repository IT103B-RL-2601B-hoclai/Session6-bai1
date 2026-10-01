let orderCode = "";
let isOrderValid = false;
let choice;

do {
  console.log("QUAY LE TAN PHONG GYM");
  console.log("1. Nhap va chuan hoa ma don");
  console.log("2. Tinh tien va in hoa don");
  console.log("3. Thoat");

  let inputChoice = prompt("Nhap lua chon (1 - 3):");
  if (inputChoice === null) {
    choice = 3;
  } else {
    choice = Number(inputChoice.trim());
  }

  switch (choice) {
    case 1: {
      orderCode = "";
      isOrderValid = false;

      let rawCode = prompt("Nhap ma don hang (VD: GYM-SHAKER-VIP):");
      if (rawCode === null || rawCode.trim() === "") {
        console.log("Loi: Chua nhap ma don hang");
        break;
      }

      let code = rawCode.trim().toUpperCase();

      if (code.length < 8) {
        console.log("Loi: Do dai ma don toi thieu 8 ky tu");
      } else if (!code.startsWith("GYM-")) {
        console.log("Loi: Ma phai bat dau bang GYM-");
      } else {
        orderCode = code;
        isOrderValid = true;
        console.log("Ma don hop le: " + orderCode);
      }
      break;
    }

    case 2: {
      if (!isOrderValid) {
        console.log("Loi: Hay nhap ma don hop le o muc 1 truoc!");
        break;
      }

      let itemCode = prompt("Nhap ma phu kien (SHAKER, GLOVES, STRAP):");
      let qtyInput = prompt("Nhap so luong mua:");

      if (itemCode === null || qtyInput === null) {
        console.log("Da huy tinh tien");
        break;
      }

      let item = itemCode.trim().toUpperCase();
      let qty = Number(qtyInput.trim());

      if (isNaN(qty) || qty <= 0) {
        console.log("Loi: So luong phai la so lon hon 0");
        break;
      }

      let unitPrice = 0;
      let itemName = "";

      if (item === "SHAKER") {
        unitPrice = 120000;
        itemName = "Binh lac";
      } else if (item === "GLOVES") {
        unitPrice = 180000;
        itemName = "Gang tay";
      } else if (item === "STRAP") {
        unitPrice = 150000;
        itemName = "Day keo lung";
      } else {
        console.log("Loi: Mon do nay khong co trong bang gia");
        break;
      }

      let subtotal = qty * unitPrice;
      let discount = 0;

      if (orderCode.endsWith("VIP")) {
        discount = subtotal * 0.1;
      }

      let total = subtotal - discount;

      console.log("HOA DON BAN LE PHU KIEN");
      console.log("Ma don hang: " + orderCode);
      console.log("Ten phu kien: " + itemName);
      console.log("So luong: " + qty);
      console.log("Don gia: " + unitPrice + " VND");
      console.log("Tien goc: " + subtotal + " VND");
      console.log("Giam gia VIP: " + discount + " VND");
      console.log("Tong thanh toan: " + total + " VND");

      orderCode = "";
      isOrderValid = false;
      break;
    }

    case 3: {
      console.log("Thoat chuong trinh thanh cong!");
      break;
    }

    default: {
      console.log("Lua chon khong hop le, nhap lai!");
      break;
    }
  }
} while (choice !== 3);