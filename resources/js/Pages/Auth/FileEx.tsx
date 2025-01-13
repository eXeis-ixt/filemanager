import React from 'react';
import {
  Image,
  Video,
  Music,
  FileText,
  FileCode,
  Archive,
  File,
  LucideIcon,
  FileAxis3D
} from 'lucide-react';

// Define supported file extensions
type ImageExt = 'jpg' | 'jpeg' | 'png' | 'gif' | 'svg' | 'webp';
type VideoExt = 'mp4' | 'avi' | 'mov' | 'wmv' | 'flv' | 'webm';
type AudioExt = 'mp3' | 'wav' | 'ogg' | 'aac' | 'm4a';
type DocumentExt = 'doc' | 'docx' | 'txt' | 'rtf';
type CodeExt = 'js' | 'jsx' | 'ts' | 'tsx' | 'html' | 'css' | 'py' | 'java' | 'cpp';
type ArchiveExt = 'zip' | 'rar' | '7z' | 'tar' | 'gz';
type PdfExt = 'pdf';

// Union type of all supported extensions
type SupportedExtension =
  | ImageExt
  | VideoExt
  | AudioExt
  | DocumentExt
  | CodeExt
  | ArchiveExt
  | PdfExt;

// File type categories
type FileCategory = 'image' | 'video' | 'audio' | 'document' | 'code' | 'pdf' | 'archive' | 'unknown';

// Interface for file type configurations
interface FileTypeConfig {
  icon: LucideIcon;
  colorClass: string;
  extensions: ReadonlyArray<SupportedExtension>;
}

// Props interface
interface FileIconProps {
  filename: string;
  size?: number;
  className?: string;
}


interface FileExtProps {
    filename: string;
    size: number;
    className: string;
  }
// File type configurations
const FILE_TYPE_CONFIG: Record<FileCategory, FileTypeConfig> = {
  image: {
    icon: Image,
    colorClass: 'text-blue-500',
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']
  },
  video: {
    icon: Video,
    colorClass: 'text-purple-500',
    extensions: ['mp4', 'avi', 'mov', 'wmv', 'flv', 'webm']
  },
  audio: {
    icon: Music,
    colorClass: 'text-green-500',
    extensions: ['mp3', 'wav', 'ogg', 'aac', 'm4a']
  },
  document: {
    icon: FileText,
    colorClass: 'text-yellow-500',
    extensions: ['doc', 'docx', 'txt', 'rtf']
  },
  code: {
    icon: FileCode,
    colorClass: 'text-red-500',
    extensions: ['js', 'jsx', 'ts', 'tsx', 'html', 'css', 'py', 'java', 'cpp']
  },
  pdf: {
    icon: FileAxis3D,
    colorClass: 'text-red-600',
    extensions: ['pdf']
  },
  archive: {
    icon: Archive,
    colorClass: 'text-orange-500',
    extensions: ['zip', 'rar', '7z', 'tar', 'gz']
  },
  unknown: {
    icon: File,
    colorClass: 'text-gray-600',
    extensions: []
  }
} as const;

const FileIcons: React.FC<FileIconProps> = ({ filename, size = 24, className = '' }) => {
  // Function to get file extension with type safety
  const getFileExtension = (filename: string): string => {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase();
  };

  // Function to determine file category based on extension
  const getFileCategory = (extension: string): FileCategory => {
    for (const [category, config] of Object.entries(FILE_TYPE_CONFIG)) {
      if (config.extensions.includes(extension as SupportedExtension)) {
        return category as FileCategory;
      }
    }
    return 'unknown';
  };

  const extension = getFileExtension(filename);
  const category = getFileCategory(extension);
  const config = FILE_TYPE_CONFIG[category];
  const IconComponent = config.icon;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <IconComponent
        size={size}
        className={config.colorClass}
      />
      <span className="text-sm text-gray-600">{filename}</span>
    </div>
  );
};

// Demo component with TypeScript
interface DemoFile {
  name: string;
  type: FileCategory;
}

const FileExt: React.FC = () => {
  const files: DemoFile[] = [
    { name: 'document.pdf', type: 'pdf' },
    { name: 'image.png', type: 'image' },
    { name: 'music.mp3', type: 'audio' },
    { name: 'video.mp4', type: 'video' },
    { name: 'archive.zip', type: 'archive' },
    { name: 'code.ts', type: 'code' },
    { name: 'document.txt', type: 'document' },
    { name: 'unknown.xyz', type: 'unknown' }
  ];

  return (
    <div className="p-4 space-y-3">
      <h2 className="text-lg font-semibold mb-4">File Type Icons</h2>
      {files.map((file, index) => (
        <div key={index} className="p-2 hover:bg-gray-50 rounded">
          <FileIcons filename={file.name} />

        </div>
      ))}
    </div>
  );
};

export default FileExt;
