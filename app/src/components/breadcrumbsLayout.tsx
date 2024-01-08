import { Typography, Breadcrumbs } from "@mui/material";
import { Link, useLocation } from "@remix-run/react";

export default function BreadcrumbsLayout() {
    const location = useLocation();
    const pathname = location.pathname;
    const getPath = pathname.split("/");
    getPath.shift();

    return (
        <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Typography color="inherit" fontSize="15px">
                <Link to="/" style={{ color: "gray" }}>
                    Home
                </Link>
            </Typography>
            {pathname != "/" ? (
                getPath.map((value, i) => (
                    <Typography key={i} fontSize="15px" color="text.primary" sx={{ textTransform: "capitalize" }}>
                        {i != getPath.length - 1 ? (
                            <Link to={value} style={{ color: "gray" }}>
                                {value}
                            </Link>
                        ) : (
                            value
                        )}
                    </Typography>
                ))
            ) : (
                <Typography fontSize="15px" color="text.primary" sx={{ textTransform: "capitalize" }}>
                    Dashboard
                </Typography>
            )}
        </Breadcrumbs>
    );
}
