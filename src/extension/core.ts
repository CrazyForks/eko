export async function pub(tabId: number, event: string, params: any): Promise<any> {
  return await chrome.tabs.sendMessage(tabId as number, {
    type: 'eko:message',
    event,
    params,
  });
}

export async function getLLMConfig(name: string = 'llmConfig'): Promise<{
  apiUrl?: string;
  modelName?: string;
  apiKey?: string;
}> {
  let result = await chrome.storage.sync.get([name]);
  return (result[name] || {}) as any;
}
