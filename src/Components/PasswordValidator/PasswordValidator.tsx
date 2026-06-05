import { TextField } from "@mui/material";
import React from "react";

const PasswordValidator: React.FC = () => {
  const [password, setPassword] = React.useState<string>("");
  return (
    <div className="flex flex-col justify-center items-center p-10 box-content bg-[#24263c] rounded-xl">
      <div className="flex flex-col justify-center items-center p-10 box-content bg-[#475569] rounded-xl gap-3">
        <h1 className="text-[#f8fafc] font-bold text-3xl">
          Password Validator
        </h1>
        <p className="text-[#f8fafc] font-light text-xl">
          Check how strong and secure is yourpassword{" "}
        </p>
        <TextField
          value={password}
          name="password"
          className="text-[white]"
          sx={{
            color:"white"
          }}
          onChange={(event: any) => setPassword(event?.target?.value)}
          placeholder="Enter your password"
        />
        {
            password?.length > 0 && password?.length < 8 && (
                <span className="text-[#ef4444]">Your password must be at least 8 characters</span>
            )
        }
      </div>
    </div>
  );
};

export default PasswordValidator;
