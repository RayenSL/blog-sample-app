import Router from 'next/router'

type Props = {
    active: string
}

export const Tabs = (props: Props) => {
    let home;
    let blog;

    if (props.active === "home") {
        home = 'underline'
        blog = 'hover:underline'
    } else {
        blog = 'underline'
        home = 'hover:underline'
    }

    return (
        <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
            role="tablist">
            <li className="nav-item" role="presentation">
                {props.active === "home" ?
                    <a href="#tabs-home"
                       className="activeTab"
                       id="tabs-home-tab"
                       data-bs-toggle="pill"
                       role="tab"
                       aria-controls="tabs-home"
                       aria-selected="true"
                       onClick={() => Router.push('/')}
                    >Home</a>
                :
                    <a href="#tabs-home"
                       className="tab"
                       id="tabs-home-tab"
                       data-bs-toggle="pill"
                       role="tab"
                       aria-controls="tabs-home"
                       aria-selected="true"
                       onClick={() => Router.push('/')}
                    >Home</a>
                }

            </li>
            <li className="nav-item" role="presentation">
                {props.active === "blog" ?
                    <a href="#tabs-home"
                       className="activeTab"
                       id="tabs-home-tab"
                       data-bs-toggle="pill"
                       role="tab"
                       aria-controls="tabs-home"
                       aria-selected="true"
                       onClick={() => Router.push('blog')}
                    >Blog</a>
                    :
                    <a href="#tabs-home"
                       className="tab"
                       id="tabs-home-tab"
                       data-bs-toggle="pill"
                       role="tab"
                       aria-controls="tabs-home"
                       aria-selected="true"
                       onClick={() => Router.push('blog')}
                    >Blog</a>
                }
            </li>
        </ul>
    )
}
