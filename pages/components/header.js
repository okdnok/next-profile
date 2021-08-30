export default function Header(props){
    return(
        <div>
            <h1 className="bg-primary px-3 text-white display-4 text-align">
                {props.header}
            </h1>
        </div>
    )
}