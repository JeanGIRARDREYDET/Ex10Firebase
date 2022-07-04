/**
 * Fichier de fonction pour le formulaire
 */

/**
 * Fonction permettant de vérifier que le champ est rempli
 * @param text 
 * @returns boolean
 */
export const isNotEmpty = (text:string): boolean => {
    return text != ""
}

/**
 * Fonction permettant de vérifier qu'un email est valide
 * @param email 
 * @returns boolean
 */
export const isEmail = (email: string): boolean => {
    const emailRegex = new RegExp(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)
    return emailRegex.test(email)
}
