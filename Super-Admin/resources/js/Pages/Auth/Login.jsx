import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CssBaseline,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Log in" />
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: "url(./assets/image/signup.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Card}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlined />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <Box
                            component="form"
                            noValidate
                            onSubmit={submit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                error={errors.email ? true : false}
                                margin="normal"
                                fullWidth
                                label="Email Address"
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={handleOnChange}
                                helperText={errors.email}
                            />
                            <TextField
                                margin="normal"
                                error={errors.email ? true : false}
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={handleOnChange}
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                sx={{ ml: 0.5 }}
                                control={
                                    <Checkbox
                                        type="checkbox"
                                        className="rounded mr-2"
                                        value={data.remember}
                                        onChange={handleOnChange}
                                        name="remember"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                            <Grid container>
                                <Grid item xs>
                                    <Link
                                        href={route("password.request")}
                                        variant="body2"
                                    >
                                        {" "}
                                        Forgot password?{" "}
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        href={route("register")}
                                        variant="body1"
                                    >
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
