function convertToSubcurrency(amount: number): number {
    return Math.round(amount * 100);
}

export default convertToSubcurrency;