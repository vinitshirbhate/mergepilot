"use client";
import { useForm } from "react-hook-form";
type FormInput = {
  repoUrl: string;
  repoName: string;
  githubToken?: string;
};

const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img
        src="github-svgrepo-com.svg"
        alt="Github logo"
        className="h-52 w-auto"
      />
      <div>
        <div>
          <h1 className="text-2xl font-semibold">
            Link your Github repository
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter the URL of your repository
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
