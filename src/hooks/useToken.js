import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email }
        const url = `http://localhost:5000/users/${email}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)

        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (user) {
                    localStorage.setItem("accessToken", data.token)
                    setToken(data.token)
                }
            })
    }, [user, token])
    return {
        token
    }
}

export default useToken;