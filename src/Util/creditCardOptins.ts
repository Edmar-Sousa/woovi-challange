import { formatCurrency } from './formats'



export function creditCardOptions(installment: number) {
    const creditCardInstallmentOptions = []


    for (let i = 1; i <= 10; i++) {
        creditCardInstallmentOptions.push({
            label: `${i}x de ${formatCurrency(installment / i)}`,
            value: i
        })
    }

    return creditCardInstallmentOptions
}