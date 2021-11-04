import { useEffect, useState } from 'react';

const usePackage = () =>
{
    const [Packages, setPackages] = useState([]);
    useEffect(() =>
    {
        fetch('https://powerful-wildwood-02565.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    return [Packages, setPackages];
};

export default usePackage;