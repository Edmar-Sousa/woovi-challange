


export function calculatePixOptions(value: number) {
    return [
        {
            label: 'Pix Parcelado',
            times: 2,
            interest: 1.04,
            value: (value * 1.04) / 2,
        },

        {
            times: 3,
            interest: 1.06,
            value: (value * 1.06) / 3,
        },

        {
            times: 4,
            interest: 1.03,
            value: (value * 1.03) / 4,
            discount: '-3%',
            bottom: 'Melhor opção de parcelamento',
        },

        {
            times: 5,
            interest: 1.08,
            value: (value * 1.08) / 5,
        },

        {
            times: 6,
            interest: 1.1,
            value: (value * 1.1) / 6,
        },

        {
            times: 7,
            interest: 1.15,
            value: (value * 1.15) / 7,
        },
    ]
}
