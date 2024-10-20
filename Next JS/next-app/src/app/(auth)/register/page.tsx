import { ReactNode } from "react";

export default function RegisterPage() {
    return (
    <div>
        <h1>Register</h1>
</div>
    );
}
RegisterPage.getLayout = function getLayout(page: ReactNode) {
    return page;
};