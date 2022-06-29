export const cryptoNotFound = (name: string) => {
    return name ? `${name} is not available.` : "";
}

export const cryptoExsits = (name: string) => {
    return name ? `${name} is already exist!` : "";
}