import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props){
    const aPet = useLoaderData()
    const id = aPet?.url.split('/')[4] // optional chaining will check if aPet is a real object



    return(
        <div>
            <h1>Show</h1>
            <h1>{aPet.name}</h1>
            <h2>{aPet.age}</h2>


            <div>
                    {/* update form */}
                <Form action={`/update/${id}/`} method="POST">
                    <label htmlFor="name">
                        Rename your Turtle
                        <input type="text" name="name" id="name" defaultValue={aPet.name}/>
                    </label>

                    <label htmlFor="age">
                        Did they have a birthday?
                        <input type="number" name="age" id="age" defaultValue={aPet.age}/>
                    </label>
                    <button style={{"backgroundColor": "blue"}}>Update Turtle</button>
                </Form>

                {/* delete form */}
                <Form action={`/delete/${id}/`} method="POST">
                    <button style={{"backgroundColor": "red"}}>Release Turtle</button>
                </Form>
            </div>

            <Link to='/'>
                <button>Go Back</button>
            </Link>
        </div>
    )
}