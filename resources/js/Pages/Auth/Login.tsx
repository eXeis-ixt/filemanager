import { useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Head, Link } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Checkbox } from "@/Components/ui/checkbox";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Alert, AlertDescription } from "@/Components/ui/alert";
import { Input } from "@/components/ui/input";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <Head title="Log in" />

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    {status && (
                        <Alert className="mb-6 bg-green-50">
                            <AlertDescription>{status}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                autoFocus
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="remember"
                                checked={data.remember}
                                onCheckedChange={(checked: boolean) =>
                                    setData("remember", checked === true)
                                }
                            />
                            <Label
                                htmlFor="remember"
                                className="text-sm text-gray-500"
                            >
                                Remember me
                            </Label>
                        </div>

                        <div className="flex items-center justify-between">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="text-sm text-gray-600 hover:text-gray-900"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                            <Link
                                href={route("register")}
                                className="text-sm text-gray-600 hover:text-gray-900 underline"
                            >
                                Create an account
                            </Link>
                            <Button type="submit" disabled={processing}>
                                Log in
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
