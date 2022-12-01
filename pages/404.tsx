import {useEffect} from "react";
import {useRouter} from "next/router";

export default function PageNotFound() {
    const router = useRouter();

    // @ts-ignore
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div>
            Страница не найдена
        </div>
    )
}
