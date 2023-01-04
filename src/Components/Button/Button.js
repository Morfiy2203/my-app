import { memo } from "react";
import './Button.css';

const Button = ({ wide, size, mode, href, loading, ...restProps }) => {
    mode = mode || 'primary';
    size = size || 'm';

    let classes = ["Button", `Button--${mode}`, `Button--${size}`];
    if (wide) classes.push("Button--wide");
    if (loading) classes.push("Button--loading");

   

    return (
        <button className={classes.join(' ')} {...restProps} />
    );
}

export default memo(Button);