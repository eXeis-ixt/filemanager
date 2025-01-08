import FileCard from "@/Components/FileCard";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import { Layout } from "@/Layouts/Default";
import { PageProps } from "@/types";
import {  Head, Link, usePage } from "@inertiajs/react";
import { FileIcon, FolderArchiveIcon } from "lucide-react";

export default function Home() {
    const user = usePage().props.auth.user;
    return (
        <Layout>
<Head>
    <title>{user.name}</title>
</Head>

             <div className="grid gap-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Welcome back {user.name} </h2>
          <p className="text-muted-foreground">
            Manage all your files here
          </p>
        </div>

        <div>

        <FileCard fileName="test.png" fileSize="2.5mb" link="https://adons.org/storage//vILowFv3zdqN9fFv5CVcElZNNIX7XU-metaTGFyYXZlbC10aGUtc2lsZW50LWtpbGxlci5wbmc=-.webp" />

        </div>


      </div>
        </Layout>
    );
}
