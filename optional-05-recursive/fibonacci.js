function fibonacci(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        let fibo = fibonacci(n - 1);
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        return fibo;
    }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
