var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = PhotonTransferCurves","category":"page"},{"location":"#PhotonTransferCurves.jl","page":"Home","title":"PhotonTransferCurves.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Code) (Image: Build Status) (Image: PkgEval) (Image: Coverage) (Image: License)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Photon transfer curves (PTC) for methodically characterizing CCD and CMOS detectors. This module provides models for PTCs with varying complexity, ready for fitting to recorded data.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"#API/Reference","page":"Home","title":"API/Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [PhotonTransferCurves]","category":"page"},{"location":"#PhotonTransferCurves.AbstractNoiseSource","page":"Home","title":"PhotonTransferCurves.AbstractNoiseSource","text":"AbstractNoiseSource\n\nInterface\n\nTo define your own source, simply provide the function for how signal is manipulated given an AbstractRNG\n\n(::MySource)(rng, input)\nnoise(::MySource, input)\nlimits(::MySource) (optional)\n\nSee ShotNoise for an example of an implementation of the interface\n\n\n\n\n\n","category":"type"},{"location":"#PhotonTransferCurves.AbstractNoiseSource-Tuple{Any}","page":"Home","title":"PhotonTransferCurves.AbstractNoiseSource","text":"(::AbstractNoiseSource)([rng], input)\n\nProcess a signal following the transfer function defined by the noise source. A random number generator can be passed if the process is stochastic.\n\n\n\n\n\n","category":"method"},{"location":"#PhotonTransferCurves.ReadNoise","page":"Home","title":"PhotonTransferCurves.ReadNoise","text":"ReadNoise(;noise)\n\nGaussian read noise, with the given RMS noise.\n\n\n\n\n\n","category":"type"},{"location":"#PhotonTransferCurves.ShotNoise","page":"Home","title":"PhotonTransferCurves.ShotNoise","text":"ShotNoise()\n\nA simple Poisson process for modifying incoming signal according to counting statistics.\n\nExamples\n\nSimulate a Poisson process with average value of 1 three times.\n\njulia> proc = ShotNoise()\n\njulia> [proc(1) for _ in 1:3]\n3-element Vector{Int64}:\n 0\n 3\n 2\n\njulia> noise(proc, 100)\n10.0\n\n\n\n\n\n","category":"type"},{"location":"#PhotonTransferCurves.limits-Tuple{PhotonTransferCurves.AbstractNoiseSource}","page":"Home","title":"PhotonTransferCurves.limits","text":"limimts(::AbstractNoiseSource)\n\nReturns the limits for signal input. By Default, is (0, Inf)\n\n\n\n\n\n","category":"method"},{"location":"#PhotonTransferCurves.noise-Tuple{PhotonTransferCurves.AbstractNoiseSource, Any}","page":"Home","title":"PhotonTransferCurves.noise","text":"noise(::AbstractNoiseSource, input)\n\nReturn the RMS noise given the input signal\n\n\n\n\n\n","category":"method"},{"location":"#PhotonTransferCurves.testdata-Tuple{}","page":"Home","title":"PhotonTransferCurves.testdata","text":"testdata()\n\nLoads a tuple of the signal and total noise from the Appendix A table A.1 from Janesick (2007).[1] This data is generated by a CMOS imager with V/e- nonlinearity. Data units are in DN.\n\nExamples\n\njulia> data = testdata();\n\njulia> size(data.S)\n(43,)\n\n[1]: James R. Janesick, 2007, \"Photon Transfer\", SPIE\n\n\n\n\n\n","category":"method"},{"location":"#Contributing-and-Support","page":"Home","title":"Contributing and Support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you would like to contribute, feel free to open a pull request. If you want to discuss something before contributing, head over to discussions and join or open a new topic. If you're having problems with something, please open an issue.","category":"page"}]
}
