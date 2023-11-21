function rupiahFormat(num) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(num);
  }
  
  export default rupiahFormat;
  