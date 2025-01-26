export default function Layout(
    {children, product, analytic}: 
    {children: React.ReactNode, 
    product: React.ReactNode,
    analytic: React.ReactNode}) {

    return (
        <div className="p-5">
            <div>
            {children}
            </div>
            <div className="mt-5 flex items-center gap-4">
                {product}
                {analytic}
            </div>
        </div>
    )
}