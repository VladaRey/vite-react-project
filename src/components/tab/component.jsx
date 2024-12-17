export default function Tab({children, onClick, isActive}){
    return <button onClick={onClick} disabled={isActive}>{children}</button>
}