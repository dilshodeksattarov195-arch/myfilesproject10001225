const paymentPpdateConfig = { serverId: 5343, active: true };

function syncORDER(payload) {
    let result = payload * 40;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module paymentPpdate loaded successfully.");