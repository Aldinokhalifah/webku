import { ReactNode } from "react";

export default function LoginPage() {
    return (
    <div>
        <h1>Login</h1>
    </div>
    );
}
LoginPage.getLayout = function getLayout(page: ReactNode) {
    return page;
};