"use client";

import { Button } from "@/components/ui/button";
import { openSource } from "@/lib/data";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Download, Github, Star, Users } from "lucide-react";
import { useState } from "react";

export function OpenSourceSection() {
    return (
        <section className="py-4">
            <motion.h2
                className="text-3xl font-bold tracking-tight mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Open Source Contributions
            </motion.h2>

            <div className="relative border-l border-zinc-800 ml-3 space-y-16">
                {openSource.map((project, index) => (
                    <OpenSourceProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}

function OpenSourceProjectCard({ project, index }: { project: typeof openSource[0], index: number }) {
    const [expandedIndex, setExpandedIndex] = useState<boolean>(false);
    const stats = project.stats;

    const toggleExpand = () => {
        setExpandedIndex(!expandedIndex);
    };

    const projectInitials = project.title.substring(0, 1).toUpperCase();

    return (
        <motion.div
            className="relative pl-6 sm:pl-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            {/* Header: Logo + Info */}
            <div className="flex flex-col sm:flex-row gap-6 mb-4 items-start">
                {/* Logo - Large Size */}
                <div className="flex-shrink-0">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-900 border border-zinc-800 shadow-sm overflow-hidden flex items-center justify-center">
                        {(project as any).logo ? (
                            <img
                                src={(project as any).logo}
                                alt={project.title}
                                className="w-full h-full object-cover scale-110"
                            />
                        ) : (
                            <span className="text-2xl font-bold text-foreground">{projectInitials}</span>
                        )}
                    </div>
                </div>

                {/* Header text info */}
                <div className="flex-grow flex flex-col justify-center gap-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">{project.title}</h3>
                    <div className="flex flex-col">
                        <span className="text-base sm:text-lg text-muted-foreground font-medium">
                            Open Source Project
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wide">
                            {project.duration}
                        </span>
                    </div>
                </div>
            </div>

            {/* Body Content */}
            <div className="flex flex-col gap-2">
                {/* Problem Statement (if exists) */}
                {(project as any).problem && (
                    <div className="mb-2 p-3 bg-purple-50 border-l-4 border-purple-200 dark:bg-purple-900/10 dark:border-purple-500/50 rounded-r">
                        <p className="text-sm font-medium text-purple-900 dark:text-purple-300">
                            <span className="font-semibold text-purple-700 dark:text-purple-200">Problem: </span>
                            {(project as any).problem}
                        </p>
                    </div>
                )}

                {/* Description & Stats */}
                <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
                    <p className="text-base text-muted-foreground">{project.description}</p>

                    {/* Stats recorded at the time of contribution */}
                    <div className="flex flex-wrap gap-4 py-1">
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                            <Download className="w-4 h-4 text-green-600 dark:text-green-500" />
                            <span className="font-semibold text-foreground">{stats.downloads}</span>
                            <span>downloads</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                            <Star className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
                            <span className="font-semibold text-foreground">{stats.stars}</span>
                            <span>stars</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                            <Users className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                            <span className="font-semibold text-foreground">{stats.contributors}</span>
                            <span>contributors</span>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">at the time of contribution</p>

                    {/* Contributions (Highlights) */}
                    <ul className="list-disc list-outside ml-5 space-y-2">
                        {project.contributions.map((contribution, cIndex) => (
                            <li key={cIndex} className="pl-1 text-muted-foreground text-base">
                                {contribution}
                            </li>
                        ))}
                    </ul>

                    {/* Collapsible Case Study */}
                    {(project as any).caseStudy && (
                        <div className="mt-4 pt-2">
                            <button
                                onClick={toggleExpand}
                                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                            >
                                {expandedIndex ? (
                                    <>
                                        <ChevronUp className="w-4 h-4" />
                                        Hide Case Study
                                    </>
                                ) : (
                                    <>
                                        <ChevronDown className="w-4 h-4" />
                                        Read Case Study
                                    </>
                                )}
                            </button>

                            {expandedIndex && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 space-y-4 pl-4 border-l-2 border-blue-500/20 text-sm text-muted-foreground"
                                >
                                    {(project as any).caseStudy.howIFound && (
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 text-base">How I Found the Project</h4>
                                            <p className="whitespace-pre-line">{(project as any).caseStudy.howIFound}</p>
                                        </div>
                                    )}
                                    {(project as any).caseStudy.constraintsAndDesign && (
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 text-base">Constraints & Design Considerations</h4>
                                            <p className="whitespace-pre-line">{(project as any).caseStudy.constraintsAndDesign}</p>
                                        </div>
                                    )}
                                    {(project as any).caseStudy.architectureAndImprovements && (
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 text-base">Architecture & Forward-Looking Improvements</h4>
                                            <p className="whitespace-pre-line">{(project as any).caseStudy.architectureAndImprovements}</p>
                                        </div>
                                    )}

                                    {/* Fallback for old structure if needed, or remove if strictly replacing */}
                                    {(project as any).caseStudy.problemAndConstraints && !((project as any).caseStudy.constraintsAndDesign) && (
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 text-base">Problem & Constraints</h4>
                                            <p>{(project as any).caseStudy.problemAndConstraints}</p>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    )}
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1.5 text-sm font-medium rounded-full border badge-green"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm" className="h-8 border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 hover:text-white" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3.5 h-3.5 mr-2" />
                            GitHub (Merged PRs)
                        </a>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
