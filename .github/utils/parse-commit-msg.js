// Output: commits<string> | error
module.exports = async ({ diffMsgs, core }) => {
	try {
		const commits = diffMsgs.split('\n').filter(
				(m) => !/^(Merge pull request|Merge branch|Merge remote-tracking)/.test(m) && !!m
			)
			.map((m) => `- ${m}`)
			.unshift('# All Changes')
			.join('\n');

		core.setOutput('commits', commits)
	} catch (error) {
		core.error(error.message)
	}
}
