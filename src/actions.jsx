import { redirect } from "react-router-dom";


const URL = import.meta.env.VITE_BASE_URL


// Create Action
export const createAction = async ({ request }) => {
    console.log("here")
    // get form data
    const formData = await request.formData()
    // construct request body
    const newPet = {
        name: formData.get("name"),
        age: formData.get("age"),
    }
    // send the request to backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPet)
    })
    // redirect back to index
    return redirect("/")
}
// Update Action updating a pet from a form submission to 'update/:id
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = request.formData()
    // get the pet id
    const id = params.id
    // construct the request body
    const updatedPet = {
        name: formData.get("name"),    
        age: formData.get("age"),    
    }
    // send the request body to the backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPet)
    })
    // redirect to show
    return redirect(`/pets/${id}`)
}
// Delete Action rehome a pet from a form submission to 'delete/:id
export const deleteAction = async({ params }) => {
    // get pet id
    const id = params.id
    //send the request to the backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect back to index
    return redirect("/")
}