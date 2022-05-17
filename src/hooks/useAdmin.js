import { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        const url = `https://doctors-potal-server-side.herokuapp.com/admin/${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setAdminLoading(false)
            })
    }, [user.email])
    return {
        admin, adminLoading
    }
};

export default useAdmin;