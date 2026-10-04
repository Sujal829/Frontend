type ButtonProps = React.ComponentProps<"button">;

const MyButton =(props: ButtonProps)=>{
    return <button {...props}/>
}

export default MyButton;