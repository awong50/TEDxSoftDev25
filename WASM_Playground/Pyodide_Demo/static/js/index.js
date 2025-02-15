async function main() {
    let pyodide = await loadPyodide();
    console.log("Pyodide loaded.");

    document.getElementById("pythonForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        let code = document.getElementById("codeInput").value;
        console.log(code)
        let outputElement = document.getElementById("output");

        try {
            pyodide.runPython(`
                import io
                import sys
                sys.stdout = io.StringIO()
              `);
            pyodide.runPython(code);
            let stdout = pyodide.runPython("sys.stdout.getvalue()");
            outputElement.textContent = stdout;
        } catch (error) {
            outputElement.textContent = "Error: " + error.message;
        }
    });
}

main();