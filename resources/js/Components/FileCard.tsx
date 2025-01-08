import { Card } from "@/Components/ui/card";
import { FileIcon, DownloadCloud } from "lucide-react";
import { Button } from "./ui/button";

interface FileCardProps {
    fileName?: string;
    fileSize?: string;
    link?: string;
}

export default function FileCard({
    fileName = "document.pdf",
    fileSize = "2.4 MB",
    link,
}: FileCardProps) {
    return (
        <Card className="flex items-center flex-col gap-4 p-4  max-w-sm hover:bg-accent/50 transition-colors cursor-pointer">
            <div className="p-2 rounded-lg bg-primary/5">
                <FileIcon className="w-10 h-10 text-primary" />
            </div>
            <div className="min-w-0">
                <p className="text-sm font-medium truncate">{fileName}</p>
                <p className="text-xs text-muted-foreground">{fileSize}</p>

            </div>
                    <DownloadCloud>
                        <a href={link} download></a>
                    </DownloadCloud>
        </Card>
    );
}
