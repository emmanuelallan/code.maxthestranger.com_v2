import * as React from "react";
import {Link} from "gatsby";

import {
    item,
    item_date,
    item_link,
    item_hovered,
    item_title
} from "./list_item.module.scss";

export default function ListItem({index, date, href, title}){
    return (
            <li className={item}>
                <Link to={href}>
                    <span className={item_link}>
                        <span className={item_hovered} />
                        <span className={item_title}>{title}</span>
                        <span className={item_date}>
                            <time dateTime="2021-11-11">{date}</time>
                        </span>
                    </span>
                </Link>
            </li>
    )
}