import React, { useState } from "react";
import { MdPrint, MdEmail, MdLock } from "react-icons/md";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            email,
            password,
        });

        // Backend login will be added here
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#f8f8f7] px-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white">
                        <MdPrint size={26} />
                    </div>
                    <h1 className="text-2xl font-semibold text-[#171717]">
                        InkSync
                    </h1>
                    <p className="text-sm text-gray-500">
                        Stationery Partner Portal
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white py-6 px-4 shadow-sm">
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold text-[#171717]">
                            Welcome back
                        </h2>
                        <p className="text-xs text-gray-500">
                            Sign in to manage your stationery orders
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-700">
                                Email
                            </label>

                            <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-orange-500">
                                <MdEmail className="text-gray-400" size={18} />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className=" block text-xs font-medium text-gray-700">
                                Password
                            </label>

                            <div className="flex items-center rounded-lg border border-gray-200 px-3 focus-within:border-orange-500">
                                <MdLock className="text-gray-400" size={18} />

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full cursor-pointer rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="mt-4 text-center text-xs text-gray-400">
                        Authorized stationery partners only
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
