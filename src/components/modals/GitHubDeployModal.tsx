import React, { useState } from 'react';
import { X, GitBranch, Copy, Check, Info, ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GITHUB_WORKFLOW_YML = `name: Deploy PCRA App to GitHub Pages (gh-pages branch)

on:
  push:
    branches:
      - main
      - master
  workflow_dispatch:

# Grant write permissions to GITHUB_TOKEN to allow pushing to gh-pages branch
permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          # Disabled npm Cache Setup: Removed the cache parameter to prevent
          # "Dependencies lock file is not found in /home/runner/work/" error

      - name: Install dependencies
        # Use --legacy-peer-deps to prevent npm ERESOLVE peer dependency lock failures in CI
        run: npm install --legacy-peer-deps

      - name: Build production applet
        run: npm run build

      - name: Deploy to gh-pages branch
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
          force_orphan: true
`;

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(GITHUB_WORKFLOW_YML);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(5,28,44,0.45)] backdrop-blur-sm animate-fade-up">
      <div className="bg-white rounded-xl shadow-[0_16px_48px_rgba(5,28,44,0.18)] w-full max-w-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E8E8E6] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[rgba(34,81,255,0.10)] flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-[#2251FF]" />
            </div>
            <div>
              <h3 className="font-heading text-[18px] font-bold text-[#051C2C]">
                GitHub Actions &amp; GitHub Pages Deployment
              </h3>
              <p className="text-[12px] text-[#888888]">
                Automated continuous deployment via gh-pages branch with zero repository name lock-in
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-[#888888] hover:text-[#051C2C] hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto text-xs">
          {/* Troubleshooting Alert Banner */}
          <div className="p-3.5 bg-[rgba(211,47,47,0.04)] border border-[rgba(211,47,47,0.2)] rounded-lg space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#D32F2F]">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>Fixing Deployment Failure (&ldquo;feat: initialize...&rdquo;)</span>
            </div>
            <p className="text-gray-700 leading-relaxed text-[11.5px]">
              If your GitHub Actions build fails on this commit, it is almost always caused by one of two root causes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-[11.5px] ml-1">
              <li>
                <strong>Issue 1: npm dependency conflict (ERESOLVE):</strong> Fixed by adding <code>--legacy-peer-deps</code> in the updated workflow and aligning <code>esbuild</code>.
              </li>
              <li>
                <strong>Issue 2: GitHub 403 Permission Denied:</strong> In GitHub repo &rarr; <strong>Settings &rarr; Actions &rarr; General &rarr; Workflow permissions</strong>, you MUST check <strong>&ldquo;Read and write permissions&rdquo;</strong> so the action can create the <code>gh-pages</code> branch.
              </li>
            </ul>
          </div>

          {/* Key Compliance Badges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-[rgba(34,81,255,0.04)] border border-[rgba(34,81,255,0.2)] rounded-lg">
              <div className="flex items-center gap-1.5 font-semibold text-[#051C2C] mb-1">
                <Info className="w-3.5 h-3.5 text-[#2251FF]" />
                <span>Relative Asset Base Configured</span>
              </div>
              <p className="text-gray-600 text-[11.5px]">
                <code>vite.config.ts</code> is set to <code>base: &apos;./&apos;</code>, ensuring all scripts and stylesheets load properly on any GitHub subpath without specifying the repository name.
              </p>
            </div>

            <div className="p-3 bg-[rgba(5,28,44,0.03)] border border-[#E8E8E6] rounded-lg">
              <div className="flex items-center gap-1.5 font-semibold text-[#051C2C] mb-1">
                <ShieldAlert className="w-3.5 h-3.5 text-[#051C2C]" />
                <span>npm Cache Disabled</span>
              </div>
              <p className="text-gray-600 text-[11.5px]">
                The workflow intentionally omits <code>cache: &apos;npm&apos;</code> in <code>setup-node</code>, completely preventing the CI failure &ldquo;Dependencies lock file is not found in /home/runner/work/&rdquo;.
              </p>
            </div>
          </div>

          {/* Workflow Code Block */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-semibold text-[#051C2C] font-mono text-[11px]">
                File: .github/workflows/deploy.yml
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 px-2.5 py-1 bg-white border border-[#E8E8E6] hover:bg-gray-50 text-[11px] font-semibold text-[#051C2C] rounded-md transition shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#00C853]" />
                    <span className="text-[#00C853]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#2251FF]" />
                    <span>Copy Workflow YAML</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-3.5 bg-[#051C2C] text-[#E8E8E6] font-mono text-[11px] leading-relaxed rounded-lg overflow-x-auto max-h-60 selection:bg-[#2251FF]">
              {GITHUB_WORKFLOW_YML}
            </pre>
          </div>

          {/* 3 Step Instructions */}
          <div className="bg-gray-50 p-3.5 rounded-lg border border-[#E8E8E6] space-y-2">
            <h4 className="font-semibold text-[#051C2C] text-[12px] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
              <span>3-Step Activation Guide in GitHub:</span>
            </h4>
            <ol className="list-decimal list-inside space-y-1.5 text-gray-700 text-[11.5px]">
              <li>
                <strong>Save Workflow:</strong> Commit the file to your repo at <code>.github/workflows/deploy.yml</code> and push to <code>main</code> or <code>master</code>.
              </li>
              <li>
                <strong>Enable Write Permissions:</strong> In your GitHub repo, go to <strong>Settings &rarr; Actions &rarr; General &rarr; Workflow permissions</strong> and select <strong>&ldquo;Read and write permissions&rdquo;</strong>, then click <strong>Save</strong>.
              </li>
              <li>
                <strong>Configure GitHub Pages:</strong> Once the action completes, go to <strong>Settings &rarr; Pages &rarr; Build and deployment</strong>, set Source to <strong>&ldquo;Deploy from a branch&rdquo;</strong>, select <code>gh-pages</code> branch and <code>/ (root)</code> folder, then Save.
              </li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-[#E8E8E6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-[#051C2C] hover:bg-[#0c2e47] rounded-lg transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
