import Link from "next/link";
import { MenuItem } from "../config/site.config";

interface NavMenuItemProps {
    item: MenuItem;
    isActive: boolean;
}

export default function NavMenuItem({ item, isActive }: NavMenuItemProps) {
    return (
        <li className="nav-item mb-2 nav-menu-item">
            <Link
                href={item.href}
                className={`nav-link d-flex align-items-center rounded-3 px-3 py-2 nav-menu-link ${isActive ? "active" : ""}`}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
            >
                <i className={`bi ${item.icon} fs-5`}></i>
                <span className="ms-2 d-none d-sm-inline">{item.label}</span>
            </Link>
        </li>
    );
}
