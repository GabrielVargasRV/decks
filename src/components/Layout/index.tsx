import Modal from "../Modal";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";

type Props = {
    children: JSX.Element,
};

const Layout= ({children}: Props) => {
    const {isOpen, modal} = useAppSelector((state) => state.modal);

    return(
        <div >
            {children}
            <Modal isOpen={isOpen} child={modal}/>
        </div>
    )
}

export default Layout;