/**
 * Utility function to conditionally join class names.
 * @param classes - Array of class names.
 * @returns A string of joined class names.
 */
export function cn(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}