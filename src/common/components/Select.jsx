/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import cx from "@/common/utils/helpers";

const Select = ({ className, label, name, ...props }) => (
  <div className="w-full">
    {label && (
      <label
        htmlFor={name}
        className="block pb-2 text-sm font-semibold text-secondary-light"
      >
        {label}
      </label>
    )}
    <select
      className={cx(
        "focus:ring-grey-light w-full rounded border-2 bg-space px-2 py-3 font-medium shadow-sm transition-all focus:border-brand",
        className
      )}
      {...props}
    />
  </div>
);

Select.defaultProps = {
  className: "",
  label: "",
  name: "",
};

Select.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
