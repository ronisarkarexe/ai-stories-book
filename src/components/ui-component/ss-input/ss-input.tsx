import { UseFormRegister, FieldValues, Path } from "react-hook-form";

interface SSInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  register: UseFormRegister<T>;
}

const SSInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  icon,
  register,
}: SSInputProps<T>) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-400">
        {label}
      </label>
      <div className="relative mt-2">
        {icon && (
          <span className="absolute inset-y-0 left-0 pl-2 flex items-center text-gray-500">
            <i className={icon}></i>
          </span>
        )}
        <input
          type={type}
          id={name}
          className="w-full pl-8 pr-2 py-1.5 text-base text-gray-200 border outline-1 -outline-offset-1 outline-gray-300 border-gray-300 rounded-md focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          placeholder={placeholder}
          {...register(name, { required })}
        />
      </div>
    </div>
  );
};

export default SSInput;
