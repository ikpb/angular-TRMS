
export interface RegisterForm{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    title: string;
    reportsTo?: string;
    userType?: string;
}