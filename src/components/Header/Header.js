import { Link } from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="">
            <div className="">
                <img
                    alt=""
                    className=""
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315" />
            </div>
            <h2 className="">
                {heading}
            </h2>
            <p className="">
                {paragraph} {' '}
                <Link to={linkUrl} className="">
                    {linkName}
                </Link>
            </p>
        </div>
    )
}